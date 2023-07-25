# SQLAlchemy import from flask_sqlalchemy

# What SQLAlchemy() is replacing from SQLAlchemy in phase 3 (imports of Base/declarative_base, Column, types(Integer, String, etc.) )


# 1. ✅ Create a Production Model
# tablename = 'Productions'
# Columns:
# id: integer(primary_key), title: string, genre: string, budget:float, image:string,director: string,
# description:string, ongoing:boolean, created_at:date time, updated_at: date time


# 2. ✅ navigate to app.py


# 3. ✅ Create a CrewMember Model
# tablename = 'crew_members'
# Columns:
# id: integer(primary_key), name: string, role: string, created_at: date time, updated_at: date time, production_id: integer(foreign key - productions table id column)
# relationships (back_populates vs back_ref)


# 4. ✅ navigate to seed.py
