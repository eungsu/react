package com.example.response;

import java.util.List;

import org.springframework.http.HttpStatus;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RestResponse<T> {
    private int status;
    private String message;
    private List<T> items;

    public static <T> RestResponse<T> success(List<T> items) {
        RestResponse<T> resp = new RestResponse<>();
        resp.status = HttpStatus.OK.value();
        resp.message = HttpStatus.OK.toString();
        resp.items = items;
        return resp;
    }

    public static <T> RestResponse<T> success(T item) {
        RestResponse<T> resp = new RestResponse<>();
        resp.status = HttpStatus.OK.value();
        resp.message = HttpStatus.OK.toString();
        resp.items = List.of(item);
        return resp;
    }

    public static RestResponse<Void> failure(HttpStatus status) {
        RestResponse<Void> resp = new RestResponse<>();
        resp.status = HttpStatus.OK.value();
        resp.message = HttpStatus.OK.toString();
        resp.items = List.of();
        return resp;
    }

    public static RestResponse<Void> failure(HttpStatus status, String message) {
        RestResponse<Void> resp = new RestResponse<>();
        resp.status = status.value();
        resp.message = message;
        resp.items = List.of();
        return resp;
    }
}
