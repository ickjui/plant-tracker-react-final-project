import React from "react";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Task from "./Task";

const Container = styled.div`
  margin: 8px;
  border: 5px solid #faf3dd;
  background-color: #64958f;
  border-radius: 15px;
  width: 250px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 10px;
`;
const TaskList = styled.div`
  padding: 10px;
  background-color: ${(props) =>
    props.isDraggingOver ? "#FFBB91" : "inherit"};
  border-radius: 10px;
  flex-grow: 1;
  min-height: 100px;
`;

function Column(props) {
  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {(provided) => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          <Title {...provided.dragHandleProps}>{props.column.title} </Title>
          <Droppable droppableId={props.column.id} type="task">
            {(provided, snapshot) => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {props.tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
}

export default Column;
