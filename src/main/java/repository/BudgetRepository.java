package repository;

import model.Budget;
import model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface BudgetRepository extends CrudRepository<Budget, Integer> {
    List<Budget> findAllByUser(User user);
}
