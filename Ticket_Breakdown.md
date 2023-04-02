# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## My answer starts here

# Ticket 1: Add a custom ID field to the Agent table

**Description:** Currently, the system is using the internal database ID for each Agent when generating reports. This ticket involves adding a custom ID field to the Agent table in the database so that Facilities can save their own custom IDs for each Agent they work with.

## Acceptance Criteria:

- A new field named "custom_id" is added to the Agent table.
- The custom_id field is editable from the Facility interface.
- The custom_id field is displayed in the Shifts view, where a Facility can see the shifts assigned to each Agent.
- The custom_id field is used in place of the internal database ID when generating reports.

**Time/Effort Estimate**: 4-6 hours

## Implementation Details:

- Add a new column named "custom_id" to the Agent table in the database.
- Update the Agent model to include a new field named "custom_id".
- Add an input field to the Facility interface to allow Facilities to edit the custom_id field.
- Update the Shifts view to display the custom_id field in addition to the existing columns.
- Modify the generateReport function to use the custom_id field instead of the internal database ID when generating reports.

# Ticket 2: Update generateReport to use custom IDs

**Description:** Currently, the system is using the internal database ID for each Agent when generating reports. This ticket involves updating the generateReport function to use the custom ID field instead.

## Acceptance Criteria:

- The generateReport function should use the custom ID field in place of the internal database ID when generating reports.

**Time/Effort Estimate**: 2-4 hours

## Implementation Details:

- Modify the generateReport function to query the custom_id field instead of the internal database ID.
- Test the generateReport function thoroughly to ensure that the custom_id field is being used correctly.
- Update the relevant documentation to reflect the new behavior.

# Ticket 3: Update getShiftsByFacility to include custom IDs

**Description:** Currently, the getShiftsByFacility function only returns the internal database ID for each Agent. This ticket involves updating the function to also return the custom ID field, if available.

## Acceptance Criteria:

- The getShiftsByFacility function should return both the internal database ID and the custom ID field, if available.
- The custom ID field should only be returned if it has been set by the Facility.
**Time/Effort Estimate**: 2-4 hours

## Implementation Details:

- Modify the getShiftsByFacility function to include the custom_id field in the returned data.
- Update the relevant documentation to reflect the new behavior.
- Test the getShiftsByFacility function thoroughly to ensure that the custom_id field is being returned correctly.


# Ticket 4: Test custom ID functionality

**Description:** This ticket involves creating test cases to ensure that the custom ID functionality is working correctly.

## Acceptance Criteria:

- Test cases are created to cover the following scenarios:
    -- Setting a custom ID for an Agent
    -- Assigning Shifts to an Agent with a custom ID
    -- Generating a report using the custom ID
- All test cases pass and the custom ID functionality is working as expected.
**Time/Effort Estimate**: 4-6 hours

## Implementation Details:

- Create test cases to cover the scenarios listed above.
- Execute the test cases and verify that they pass.
- Fix any bugs or issues that are identified during testing.
- Update the relevant documentation to reflect the new functionality and testing.
