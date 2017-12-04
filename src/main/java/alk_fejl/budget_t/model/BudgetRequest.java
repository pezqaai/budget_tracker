package alk_fejl.budget_t.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @Column(nullable = false)
    private Budget.Status status;

    @JsonIgnore
    @ManyToOne(targetEntity = Budget.class)
    private Budget budget;

    @Override
    public String toString() {
        return "Request: {id: "+this.getId()+" version "+this.getVersion()+" text "+request+"}";
    }
}

