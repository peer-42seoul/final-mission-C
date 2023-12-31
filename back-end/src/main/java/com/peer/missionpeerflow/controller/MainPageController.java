package com.peer.missionpeerflow.controller;

import com.peer.missionpeerflow.dto.response.QuestionResponse;
import com.peer.missionpeerflow.service.MainPageService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1")
public class MainPageController {

    private final MainPageService mainPageService;

    @GetMapping("")
    public Page<QuestionResponse> mainPage (@RequestParam(value = "category", defaultValue = "null")String category, @RequestParam(value = "sort", defaultValue = "createdAt") String sort, @RequestParam(value = "pageIndex", defaultValue = "0") int pageIndex, @RequestParam(value = "pageSize", defaultValue = "10") int pageSize) {
        if (category.equals("null"))
        {
            return this.mainPageService.getQuestionResponsePages(pageIndex, pageSize, sort);
        }
        return this.mainPageService.getQuestionResponsePages(pageIndex, pageSize, sort, category);
    }

    @GetMapping("/search")
    public Page<QuestionResponse> search (@RequestParam(value = "title", defaultValue = "")String title, @RequestParam(value = "sort", defaultValue = "createdAt") String sort) {
        return this.mainPageService.getSearchQuestionResponsePages(title, sort);
    }
}
