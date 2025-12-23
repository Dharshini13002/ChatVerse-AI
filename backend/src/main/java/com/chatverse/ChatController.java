package com.chatverse;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;
import java.util.Map;
import javax.annotation.PostConstruct;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ChatController {

    @PostConstruct
    public void init() {
        ChatService.init();
    }

    @GetMapping("/characters")
    public ResponseEntity<List<Character>> getCharacters() {
        return ResponseEntity.ok(ChatService.getCharacters());
    }

    @PostMapping("/chat")
    public ResponseEntity<Map<String, String>> chat(@RequestBody Map<String, String> request) {
        String characterId = request.get("characterId");
        String message = request.get("message");
        String reply = ChatService.handleChat(characterId, message);
        return ResponseEntity.ok(Map.of("reply", reply));
    }
}