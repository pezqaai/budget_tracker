package api;

import model.Budget;
import service.BudgetService;
import service.UserService;
import service.annotations.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static model.User.Role.ADMIN;
import static model.User.Role.USER;

@RestController
@RequestMapping("/api/budget")
public class BudgetApiController {

    @Autowired
    private BudgetService budgetService;

    @Autowired
    private UserService userService;

    @Role({ADMIN, USER})
    @GetMapping
    private ResponseEntity<Iterable<Budget>> list() {
        Iterable<Budget> issues = budgetService.listByRole(userService.getUser());
        return ResponseEntity.ok(issues);
    }

    @Role({ADMIN, USER})
    @PostMapping
    private ResponseEntity<Budget> create(@RequestBody Budget budget) {
        Budget saved = budgetService.create(budget);
        return ResponseEntity.ok(saved);
    }

    @Role({ADMIN, USER})
    @GetMapping("/{id}")
    private ResponseEntity<Budget> read(@PathVariable String id) {
        Budget read = budgetService.read(Integer.parseInt(id));
        return ResponseEntity.ok(read);
    }

    @Role(ADMIN)
    @PutMapping("/{id}")
    private ResponseEntity<Budget> update(@PathVariable int id, @RequestBody Budget budget) {
        Budget updated = budgetService.update(id, budget);
        return ResponseEntity.ok(updated);
    }

    @Role(ADMIN)
    @DeleteMapping("/{id}")
    private ResponseEntity delete(@PathVariable int id) {
        budgetService.delete(id);
        return ResponseEntity.ok().build();
    }
}
