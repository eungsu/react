package com.example.config.jwt;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Builder
public class Token {
    private final String tokenType = "bearer";
    private String accessToken;
    private long expiresIn;
    private String refreshToken;
    private long refreshTokenExpiresIn;

    @Builder
    public Token(String accessToken, long expiresIn, String refreshToken, long refreshTokenExpiresIn) {
        this.accessToken = accessToken;
        this.expiresIn = expiresIn;
        this.refreshToken = refreshToken;
        this.refreshTokenExpiresIn = refreshTokenExpiresIn;
    }

    
}
