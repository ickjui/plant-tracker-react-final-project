import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import DatePicker from "./DateTimePicker";
import SunSelector from "./SunSelector";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  /* conditionally setting background color based on isDragging prop */
  background-color: ${(props) => (props.isDragging ? "#065C6F" : "white")};
  /* display: flex; */
`;

const Handle = styled.div`
  width: 17px;
  height: 14px;
  background-color: green;
  border-radius: 4px;
  margin-right: 8px;
  display: inline-flex;
`;

const Picker = styled.div``;

// Refactored to functional component
function Task(props) {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <>
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <Handle {...provided.dragHandleProps} />
            {props.task.content}
            <Picker>
              <p>🚰 Date last watered</p>
              <DatePicker />
            </Picker>
            <SunSelector />
          </Container>
        </>
      )}
    </Draggable>
  );
}

export default Task;
