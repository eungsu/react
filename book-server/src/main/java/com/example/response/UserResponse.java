package com.example.response;

import java.util.Date;
import java.util.List;

import com.example.constant.RoleType;
import com.example.entity.Authority;
import com.example.entity.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserResponse {

	private Long id;
	private String username;
	private String nickname;
	private List<RoleType> authorities;
	private Date createdDate;
	private Date updatedDate;
	
	public static UserResponse toResponse(User user) {
		return UserResponse.builder()
				.id(user.getId())
				.username(user.getUsername())
				.nickname(user.getNickname())
				.authorities(user.getAuthorities().stream().map(Authority::getRoleType).toList())
				.createdDate(user.getCreatedDate())
				.updatedDate(user.getUpdatedDate())
				.build();
	}
}
