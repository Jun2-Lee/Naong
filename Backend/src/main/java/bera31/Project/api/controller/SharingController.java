package bera31.Project.api.controller;

import bera31.Project.domain.dto.requestdto.SharingRequestDto;
import bera31.Project.domain.dto.responsedto.SharingListResponseDto;
import bera31.Project.domain.dto.responsedto.SharingResponseDto;
import bera31.Project.service.page.SharingService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class SharingController {

    private final SharingService sharingService;

    @GetMapping("/api/sharing")
    public List<SharingListResponseDto> findAllSharing(){
        return sharingService.findAllSharing();
    }

    @GetMapping("/api/sharing/{id}")
    public SharingResponseDto findSharing(@PathVariable long id){
        return sharingService.findSharing(id);
    }

    @PostMapping("/api/sharing")
    public void createSharing(@RequestBody SharingRequestDto sharingRequestDto) {
        sharingService.postSharing(sharingRequestDto);
    }

    @GetMapping("/api/sharingPosts/search")
    public String searchByKeyword(@RequestParam String keyword) {
        return "ok";
    }

    @GetMapping("/api/sharingPosts/{sharingId}")
    public String findSharing(@PathVariable String sharingId) {
        return "ok";
    }

    @PutMapping("/api/sharingPosts/{sharingId}")
    public String changeSharing(@PathVariable String sharingId) {
        return "ok";
    }

    @DeleteMapping("/api/sharingPosts/{sharingId}")
    public String deleteSharing(@PathVariable String sharingId) {
        return "ok";
    }

}
