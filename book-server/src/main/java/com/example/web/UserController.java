package com.example.web;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.config.jwt.JwtProvider;
import com.example.config.jwt.Token;
import com.example.request.LoginRequest;
import com.example.request.UserRequest;
import com.example.response.RestResponse;
import com.example.response.UserResponse;
import com.example.service.UserService;
import lombok.RequiredArgsConstructor;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserController {

	private final UserService userService;
	private final JwtProvider jwtProvider;
	private final AuthenticationManagerBuilder authenticationManagerBuilder;
	
	@PostMapping("/signup")
	public RestResponse<UserResponse> signup(@RequestBody UserRequest request) {
		return RestResponse.success(userService.save(request));
	}
	
	@PostMapping("/signin")
	public RestResponse<Token> singin(@RequestBody LoginRequest request, @Value("${jwt.expires_in}") final long expriesIn) {
		UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword());
		Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
		String token = jwtProvider.createToken(authentication);
		
		return RestResponse.success(Token.builder().accessToken(token).expiresIn(expriesIn).build());
	}
	
	@PreAuthorize("hasAnyRole('ROLE_USER', 'ROLE_ADMIN')")
	@GetMapping("/users")
	public RestResponse<UserResponse> getMyUserInfo(Principal principal) {
		return RestResponse.success(userService.getUser(principal.getName()));
	}
	
	@Secured("ROLE_ADMIN")
	@GetMapping("/users/{username}")
	public RestResponse<UserResponse> getUserInfo(@PathVariable(name = "username") String username) {
		return RestResponse.success(userService.getUser(username));
	}
}
