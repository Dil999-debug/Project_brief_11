# MongoDB Collection Design

## 1. Users

Fields:
- _id
- name
- email
- password
- role

Purpose:
Stores user account and profile information.

---

## 2. Categories

Fields:
- _id
- name
- type
- userId

Purpose:
Stores income and expense categories.

---

## 3. Income

Fields:
- _id
- userId
- categoryId
- amount
- date
- description

Purpose:
Stores income transactions.

---

## 4. Expenses

Fields:
- _id
- userId
- categoryId
- amount
- date
- description

Purpose:
Stores expense transactions.

---

## 5. Budgets

Fields:
- _id
- userId
- categoryId
- amount
- month
- year

Purpose:
Stores monthly budget information.

---

## 6. Reports

Fields:
- _id
- userId
- reportType
- period
- data

Purpose:
Stores generated or cached report information.
This collection is optional.