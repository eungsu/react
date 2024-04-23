package com.example.config.jwt;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class JwtPayload {

	private final Long id;
	private final String username;
	private final Date issueAt;
}
