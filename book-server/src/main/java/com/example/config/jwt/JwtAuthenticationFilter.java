package com.example.config.jwt;

import java.io.IOException;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

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
		
		if (StringUtils.hasText(token) && jwtProvider.validateToken(token)) {
			Authentication authentication = jwtProvider.getAuthentication(token);
			SecurityContextHolder.getContext().setAuthentication(authentication);
		}
		
		filterChain.doFilter(request, response);
	}
	
	private String resolveToken(HttpServletRequest request) {
		String value = request.getHeader("Authorization");
		if (StringUtils.hasText(value) && StringUtils.startsWithIgnoreCase(value, "Bearer ")) {
			return value.substring(7);
		}
		return null;
	}
}
