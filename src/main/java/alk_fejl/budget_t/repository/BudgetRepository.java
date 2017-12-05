package alk_fejl.budget_t.repository;

import alk_fejl.budget_t.model.Budget;
import alk_fejl.budget_t.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface BudgetRepository extends CrudRepository<Budget, Integer> {
    List<Budget> findAllByUser(User user);
    Budget findById(int id);
}
