package alk_fejl.budget_t.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.xml.internal.bind.v2.TODO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "BUDGETS")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Budget extends BaseEntity {


    @JoinColumn(referencedColumnName = "id")
    @ManyToOne(targetEntity = User.class)
    private User user;

    @Column(nullable = false)
    private Timestamp timestamp;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Status status;

    @Column(nullable = false)
    private String location;

    @Column(nullable = false)
    private String description;


    @Column(nullable = false)
    private int available_funds;

    @Column(nullable = false)
    private int rest;

    @JoinColumn(referencedColumnName = "id")
    @OneToMany(cascade = CascadeType.ALL,targetEntity = BudgetRequest.class)
    private List<BudgetRequest> requests;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "USERS_BUDGET",
            joinColumns = @JoinColumn(name = "USER_ID", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "BUDGETS_ID", referencedColumnName = "id"))
    private List<User> Users;

    @Override
    public String toString() {
        return "Budget: {id: "+this.getId()+" version "+this.getVersion()+" text "+description+"}";
    }

    public enum Status {
        SUBMITED, ONGOING, APPROVED
    }
}