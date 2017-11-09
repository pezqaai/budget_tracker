package model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "BUDGET_REQUEST")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class BudgetRequest extends BaseEntity {

    @Column(nullable = false)
    private Timestamp timestamp;

    @Column(nullable = false)
    private String request;

    @Column(nullable = false)
    private int needed_funds;

    @JoinColumn
    @ManyToOne(targetEntity = Budget.class)
    private Budget budget;
}