package alk_fejl.budget_t.api;

import alk_fejl.budget_t.model.Budget;
import alk_fejl.budget_t.model.BudgetRequest;
import alk_fejl.budget_t.service.BudgetService;
import alk_fejl.budget_t.service.UserService;
import alk_fejl.budget_t.service.annotations.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static alk_fejl.budget_t.model.User.Role.ADMIN;
import static alk_fejl.budget_t.model.User.Role.USER;

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

    @Role({USER, ADMIN})
    @PostMapping("/{id}/request")
    private ResponseEntity addRequest(@PathVariable int id, @RequestBody BudgetRequest request) {
        budgetService.addRequest(id, request);
        return ResponseEntity.ok().build();
    }
}
