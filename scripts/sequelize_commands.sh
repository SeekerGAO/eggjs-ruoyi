#!/bin/bash

# Prompt user to select a Sequelize command
echo "Select a Sequelize command:"
echo "1. Generate new migration file"
echo "2. Run all pending migrations"
echo "3. Run a specific migration file"
echo "4. Revert last migration"
echo "5. Revert all migrations"
read -r -p "Enter the number of the command: " commandNumber

# Execute the selected Sequelize command based on the user's choice
case $commandNumber in
1)
  # Prompt user for table name
  read -r -p "Enter table name: " tableName
  # Generate new migration file
  migrationFileName="init-${tableName}"
  echo "Generating migration file: $migrationFileName"
  npx sequelize-cli migration:generate --name "$migrationFileName"
  echo "Migration file generated successfully!"
  ;;
2)
  # Run all pending migrations
  echo "Running all pending migrations..."
  npx sequelize-cli db:migrate
  echo "Migrations completed successfully!"
  ;;
3)
  # Run a specific migration file
  read -r -p "Enter the name of the migration file: " migrationFile
  echo "Running specific migration file: $migrationFile"
  npx sequelize-cli db:migrate --to "$migrationFile"
  echo "Migration completed successfully!"
  ;;
4)
  # Revert last migration
  echo "Reverting last migration..."
  npx sequelize-cli db:migrate:undo
  echo "Last migration reverted successfully!"
  ;;
5)
  # Revert all migrations
  echo "Reverting all migrations..."
  npx sequelize-cli db:migrate:undo:all
  echo "All migrations reverted successfully!"
  ;;
*)
  echo "Invalid command number. Exiting."
  ;;
esac
