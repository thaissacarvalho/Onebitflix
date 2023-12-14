import { Model, Optional, DataTypes } from "sequelize"
import { database } from "../database"

export interface Category {
    id: number
    name: string
    position: number
}

export interface CategoryCreationAttributes extends Optional<Category, 'id'>{ }

export interface CategoryInstance extends Model<Category, CategoryCreationAttributes>, Category { }

export const Category = database.define<CategoryInstance, Category>('Category', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      position: {
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER
      }    
})