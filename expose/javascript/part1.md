# Part 1

1. "values added: 20"
2. "final result: 20"
3. "values added: 20"
4. error, because let is declared inside the if statement block, so it's scope
is only within that block, and line 13 is outside of that and doesn't have access
to it
5. error, because result is a const variable and can't be reassigned
6. error, for the same reason as 5, it won't even reach that line
