Feature: Candidates

Scenario: Have candidates on database
  When I request /candidates
  Then I get candidates list
