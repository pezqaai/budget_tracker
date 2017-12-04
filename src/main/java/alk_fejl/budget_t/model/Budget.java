package alk_fejl.budget_t.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    private int available_funds ;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, targetEntity = BudgetRequest.class)
    private List<BudgetRequest> requests;

    public enum Status {
        SUBMITED, ONGOING, APPROVED
    }
}
