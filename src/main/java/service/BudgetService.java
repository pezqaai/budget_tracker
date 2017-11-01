package service;

import model.Budget;
import model.User;
import repository.BudgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Collections;

@Service
public class BudgetService {

    @Autowired
    private BudgetRepository budgetRepository;

    public Iterable<Budget> budgets() {
        return budgetRepository.findAll();
    }

    public Iterable<Budget> listByRole(User user) {
        User.Role role = user.getRole();
        if (role.equals(User.Role.USER)) {
            return budgetRepository.findAllByUser(user);
        } else if (role.equals(User.Role.ADMIN)) {
            return budgetRepository.findAll();
        }
        return Collections.emptyList();
    }

    public Budget create(Budget budget) {
        budget.setStatus(Budget.Status.SUBMITED);
        budget.setTimestamp(Timestamp.valueOf(LocalDateTime.now()));
        return budgetRepository.save(budget);
    }

    public Budget update(int id, Budget budget) {
        Budget currentBudget = budgetRepository.findOne(id);

        currentBudget.setStatus(budget.getStatus());
        return budgetRepository.save(currentBudget);
    }

    public void delete(int id) {
        budgetRepository.delete(id);
    }

    public Budget read(int id) {
        return budgetRepository.findOne(id);
    }
}
