package alk_fejl.budget_t.repository;


import alk_fejl.budget_t.model.BudgetRequest;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface BudgetRequestRepository extends CrudRepository<BudgetRequest, Integer> {

}
