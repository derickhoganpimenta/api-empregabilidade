Feature: Candidates

Scenario: Have candidates on database
  Given Have registereds candidates
  When I request /candidates
  Then I get candidates list
