package com.example.config.jwt;

import java.io.IOException;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import com.example.response.RestResponse;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.UnsupportedJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

	private final JwtProvider jwtProvider;
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		String token = resolveToken(request);
		
		if (StringUtils.hasText(token)) {
			try {
				Authentication authentication = jwtProvider.getAuthentication(token);
				SecurityContextHolder.getContext().setAuthentication(authentication);
			} catch (SecurityException | MalformedJwtException e) {
				handleException(response, "JWT 토큰이 올바르게 구성되어 있지 않습니다.");
			} catch (ExpiredJwtException e) {
				handleException(response, "만료된 JWT 토큰입니다.");
			} catch (UnsupportedJwtException e) {
				handleException(response, "지원되지 않는 JWT 토큰입니다.");
			} catch (IllegalArgumentException e) {
				handleException(response, "잘못된 JWT 토큰입니다");
			}
		}
		filterChain.doFilter(request, response);
	}

	private void handleException(HttpServletResponse response, String message) throws IOException {
		response.setContentType(MediaType.APPLICATION_JSON_VALUE);
		ObjectMapper mapper = new ObjectMapper();
		mapper.writeValue(response.getOutputStream(), RestResponse.failure(HttpStatus.UNAUTHORIZED, message));
	}
	
	private String resolveToken(HttpServletRequest request) {
		String value = request.getHeader("Authorization");
		if (StringUtils.hasText(value) && StringUtils.startsWithIgnoreCase(value, "Bearer ")) {
			return value.substring(7);
		}
		return null;
	}
}
