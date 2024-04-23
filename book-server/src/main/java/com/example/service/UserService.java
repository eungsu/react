package com.example.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.constant.RoleType;
import com.example.entity.Authority;
import com.example.entity.User;
import com.example.repository.UserRepository;
import com.example.request.UserRequest;
import com.example.response.UserResponse;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;
	
	public UserResponse save(UserRequest request) {
		if (userRepository.existsByUsername(request.getUsername())) {
			throw new RuntimeException("이미 가입된 사용자입니다.");
		}
		

		Authority authority = new Authority();
		authority.setRoleType(RoleType.ROLE_USER);
		
		User user = new User();
		user.setUsername(request.getUsername());
		user.setPassword(passwordEncoder.encode(request.getPassword()));
		user.setNickname(request.getNickname());
		user.addAuthority(authority);
		
		userRepository.save(user);		
		
		return UserResponse.toResponse(userRepository.findById(user.getId()).get());
	}
	
	public UserResponse getUser(String username) {
		User user = userRepository.findByUsername(username)
				.orElseThrow(() -> new RuntimeException("사용자가 존재하지 않습니다."));
		return UserResponse.toResponse(user);
	}
	
}
