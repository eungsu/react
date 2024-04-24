package com.example.web;

import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Book;
import com.example.service.BookService;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/books")
@RequiredArgsConstructor
public class BookRestController {

	private final BookService bookService;
	
	@PreAuthorize("isAuthenticated()")
	@GetMapping
	public List<Book> getAllBooks() {
		return bookService.getAllBooks();
	}
}
