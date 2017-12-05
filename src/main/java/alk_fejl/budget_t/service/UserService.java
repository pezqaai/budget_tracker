package alk_fejl.budget_t.service;

import alk_fejl.budget_t.model.Budget;
import alk_fejl.budget_t.model.User;
import alk_fejl.budget_t.repository.UserRepository;
import alk_fejl.budget_t.service.exceptions.UserNotValidException;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;

import java.util.Collections;

import static alk_fejl.budget_t.model.User.Role.USER;


@Service
@SessionScope
@Data
public class UserService {
    @Autowired
    private UserRepository userRepository;

    private User user;

    public Iterable<User> users() { return userRepository.findAll();}

    public User update(int id, User user) {
        User currentUser = userRepository.findOne(id);
        currentUser.setEmail(user.getEmail());
        currentUser.setPassword(user.getPassword());
        currentUser.setUsername(user.getUsername());
        return userRepository.save(currentUser);
    }

    //TODO:FIX needed duo to database connections
    public void delete(int id) { userRepository.delete(id); }

    public User login(User user) throws UserNotValidException {
        if (isValid(user)) {
            return this.user = userRepository.findByUsername(user.getUsername()).get();
        }
        throw new UserNotValidException();
    }

    public User register(User user) {
        user.setRole(USER);
        userRepository.save(user);
        return this.user;
    }

    public boolean isValid(User user) {
        return userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword()).isPresent();
    }

    public User newBudget(Budget budget){
        User newBudgetUser = userRepository.findOne(user.getId());
        if(newBudgetUser != null){
            newBudgetUser.getBudgets().add(budget);
            userRepository.save(newBudgetUser);
            user = newBudgetUser;
            return newBudgetUser;
        }
        return null;
    }
    public User delBudget(int id, Budget delBudget)
    {
        User user = userRepository.findOne(id);
        user.getBudgets().remove(delBudget);
        return userRepository.save(user);
    }

    public boolean isLoggedIn() {
        return user != null;
    }
}
