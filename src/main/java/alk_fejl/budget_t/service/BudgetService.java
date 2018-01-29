package alk_fejl.budget_t.service;

import alk_fejl.budget_t.model.Budget;
import alk_fejl.budget_t.model.BudgetRequest;
import alk_fejl.budget_t.model.User;
import alk_fejl.budget_t.repository.BudgetRepository;
import alk_fejl.budget_t.repository.BudgetRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Collections;

@Service
public class BudgetService {

    @Autowired
    private BudgetRepository budgetRepository;

    @Autowired
    private BudgetRequestRepository requestRepository;

    @Autowired
    private UserService  userService ;

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
        budget.setUser(userService.getUser());
        budgetRepository.save(budget);
        userService.newBudget(budget);
        return budget;
    }

    public Budget updateBudget(int id, Budget budget) {
        Budget currentBudget = budgetRepository.findOne(id);
        currentBudget = budget;
        return budgetRepository.save(currentBudget);
    }

    public Budget update(int id, Budget budget) {
        Budget currentBudget = budgetRepository.findOne(id);
        currentBudget.setStatus(budget.getStatus());
        return budgetRepository.save(currentBudget);
    }
        //TODO:FIX needed duo to database connections
    public void delete(int id)
    {
        Budget del = budgetRepository.findOne(id);
        int user = del.getUser().getId();
        userService.delBudget(user,del);
        budgetRepository.delete(id);
    }

    public Budget read(int id) {
        return budgetRepository.findOne(id);
    }

    public void addRequest(int id, BudgetRequest request) {

        Budget budget = budgetRepository.findOne(id);
        request.setTimestamp(Timestamp.valueOf(LocalDateTime.now()));
        request.setStatus(Budget.Status.SUBMITED);
        request.setBudget(budget);
        requestRepository.save(request);
        budget.getRequests().add(request);
        System.out.print(budget.getRequests());
        budgetRepository.save(budget);
    }
    public void modRequest(int id, BudgetRequest request) {

        Budget budget = budgetRepository.findOne(id);
        BudgetRequest budgetRequest = requestRepository.findOne(request.getId());
        budgetRequest.setStatus(request.getStatus());
        requestRepository.save(budgetRequest);
        //budget.getRequests().set(budget.getRequests().indexOf(request),budgetRequest);
        //budgetRepository.save(budget);
    }
    public void delRequest(int request) {

        BudgetRequest budgetRequest = requestRepository.findOne(request);
        Budget budget = budgetRepository.findOne(budgetRequest.getBudget().getId());
        budget.getRequests().remove(budgetRequest);
        budgetRepository.save(budget);
        requestRepository.delete(budgetRequest);
    }
}
