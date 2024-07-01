def get_student_grade():
    while True:
        try:
            marks = float(input("Enter student marks (0-100): "))
            
            if 0 <= marks <= 100:
                if marks > 79:
                    grade = 'A'
                elif marks >= 60:
                    grade = 'B'
                elif marks >= 50:
                    grade = 'C'
                elif marks >= 40:
                    grade = 'D'
                else:
                    grade = 'E'
                
                print(f"Student's grade: {grade}")
                break
            else:
                print("Please enter a valid number between 0 and 100.")
        except ValueError:
            print("Invalid input. Please enter a numeric value.")

# Call the function to test it
get_student_grade()
