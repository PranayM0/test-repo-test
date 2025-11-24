#====================================================================================================
# START - Testing Protocol - DO NOT EDIT OR REMOVE THIS SECTION
#====================================================================================================

# THIS SECTION CONTAINS CRITICAL TESTING INSTRUCTIONS FOR THE MAIN AGENT
# THE MAIN AGENT IS RESPONSIBLE FOR ALL TESTING AS NO SEPARATE TESTING AGENT IS AVAILABLE

# Testing Responsibility:
# Since no separate testing_agent is available, the main agent must handle all testing tasks directly.
# The main agent should implement, test, and verify all functionality itself.
#
# You have access to this file called `test_result.md` which tracks the complete testing state
# and history throughout the development process.
#
# Main agent must follow this exact format to maintain testing data. 
# The testing data must be entered in yaml format. Below is the data structure:
# 
## user_problem_statement: {problem_statement}
## backend:
##   - task: "Task name"
##     implemented: true
##     working: true  # or false or "NA"
##     file: "file_path.py"
##     stuck_count: 0
##     priority: "high"  # or "medium" or "low"
##     needs_retesting: false
##     status_history:
##         -working: true  # or false or "NA"
##         -agent: "main"  # or "user"
##         -comment: "Detailed comment about status"
##
## frontend:
##   - task: "Task name"
##     implemented: true
##     working: true  # or false or "NA"
##     file: "file_path.js"
##     stuck_count: 0
##     priority: "high"  # or "medium" or "low"
##     needs_retesting: false
##     status_history:
##         -working: true  # or false or "NA"
##         -agent: "main"  # or "user"
##         -comment: "Detailed comment about status"
##
## metadata:
##   created_by: "main_agent"
##   version: "1.0"
##   test_sequence: 0
##   run_ui: false
##
## test_plan:
##   current_focus:
##     - "Task name 1"
##     - "Task name 2"
##   stuck_tasks:
##     - "Task name with persistent issues"
##   test_all: false
##   test_priority: "high_first"  # or "sequential" or "stuck_first"
##
## implementation_notes:
##     -agent: "main"  # or "user"
##     -message: "Implementation notes and observations"

# Protocol Guidelines for Main Agent (Handling Both Development & Testing):
#
# 1. Update Test Result File After Implementation:
#    - Main agent must update the `test_result.md` file after implementing features
#    - Add implementation details to the status_history
#    - Set `working` status based on your own testing
#    - Document any issues found during implementation
#
# 2. Incorporate User Feedback:
#    - When a user provides feedback that something is or isn't working, add this information to the relevant task's status_history
#    - Update the working status based on user feedback
#    - If a user reports an issue with a task that was marked as working, increment the stuck_count
#    - Whenever user reports issue in the app, find the appropriate task and append the user concern to status_history
#
# 3. Track Stuck Tasks:
#    - Monitor which tasks have high stuck_count values or where you are fixing same issue again and again
#    - For persistent issues, use websearch tool to find solutions
#    - Pay special attention to tasks in the stuck_tasks list
#    - When you fix an issue with a stuck task, reset stuck_count only after verifying the fix works
#
# 4. Self-Testing Protocol:
#    - After implementing features, test them yourself by:
#      - Running the backend server and checking endpoints
#      - Verifying frontend components render correctly
#      - Testing integration between frontend and backend
#      - Checking error handling and edge cases
#    - Document test results in status_history
#
# 5. Maintain Testing Records:
#    - Keep comprehensive logs in test_result.md
#    - Document both successes and failures
#    - Track which areas need more attention
#    - Update test_plan with next steps
#
# IMPORTANT: Main agent must ALWAYS update test_result.md with implementation and testing results to maintain project state visibility.

#====================================================================================================
# END - Testing Protocol - DO NOT EDIT OR REMOVE THIS SECTION
#====================================================================================================


#====================================================================================================
# Testing Data - Main agent should log testing data below this section
#====================================================================================================
