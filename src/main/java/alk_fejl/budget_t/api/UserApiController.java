package alk_fejl.budget_t.api;

import alk_fejl.budget_t.model.User;
import alk_fejl.budget_t.service.UserService;
import alk_fejl.budget_t.service.annotations.Role;
import alk_fejl.budget_t.service.exceptions.UserNotValidException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static alk_fejl.budget_t.model.User.Role.ADMIN;
import static alk_fejl.budget_t.model.User.Role.USER;

@RestController
@RequestMapping("/api/user")
public class UserApiController {

    private final UserService userService;

    @Autowired
    public UserApiController(UserService userService) {
        this.userService = userService;
    }

    @Role({USER,ADMIN})
    @GetMapping()
    public ResponseEntity<User> user() {
        if (userService.isLoggedIn()) {
            return ResponseEntity.ok(userService.getUser());
        }
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user) {
        try {
            return ResponseEntity.ok(userService.login(user));
        } catch (UserNotValidException e) {
            return ResponseEntity.badRequest().build();
        }
    }
    @Role({ADMIN})
    @GetMapping("/all")
    private ResponseEntity<Iterable<User>> list() {
        Iterable<User> users = userService.users();
        return ResponseEntity.ok(users);
    }

    @Role(ADMIN)
    @PutMapping("/{id}")
    private ResponseEntity<User> update(@PathVariable int id, @RequestBody User user) {
        User updated = userService.update(id, user);
        return ResponseEntity.ok(updated);
    }
    @Role(ADMIN)
    @DeleteMapping("/{id}")
    private ResponseEntity delete(@PathVariable int id) {
        userService.delete(id);
        return ResponseEntity.ok().build();
    }
    @GetMapping("/logout")
    public ResponseEntity logout() {
        this.userService.setUser(null);
        return ResponseEntity.ok().build();
    }
    @Role(ADMIN)
    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        User saved = userService.register(user);
        return ResponseEntity.ok(saved);
    }
}
