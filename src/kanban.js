import React, { Component } from "react";
import "./index.css";

export default class KanbanBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { name: 'task 0', stage: 0 },
        { name: 'task 1', stage: 0 },
        { name: 'task 2', stage: 0 },
        { name: 'task 3', stage: 0 },
        { name: 'task 4', stage: 1 },
        { name: 'task 5', stage: 1 },
        { name: 'task 6', stage: 1 },
        { name: 'task 7', stage: 2 },
        { name: 'task 8', stage: 2 },
        { name: 'task 9', stage: 3 },
      ],
    };
    this.stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done'];
  }

  moveToForward = (task) => {
    const stateCopy = [...this.state.tasks];
    const index = stateCopy.findIndex((t) => t.name === task.name);

    if (index !== -1 && stateCopy[index].stage < this.stagesNames.length - 1) {
      stateCopy[index].stage += 1;
      this.setState({
        tasks: stateCopy,
      });
    }
  };

  moveToBack = (task) => {
    const stateCopy = [...this.state.tasks];
    const index = stateCopy.findIndex((t) => t.name === task.name);

    if (index !== -1 && stateCopy[index].stage > 0) {
      stateCopy[index].stage -= 1;
      this.setState({
        tasks: stateCopy,
      });
    }
  };

  render() {
    const { tasks } = this.state;

    let stagesTasks = [];
    for (let i = 0; i < this.stagesNames.length; ++i) {
      stagesTasks.push([]);
    }
    for (let task of tasks) {
      const stageId = task.stage;
      stagesTasks[stageId].push(task);
    }

    return (
      <div className="mt-20 justify-center items-center">
        <div className="mt-50 layout-row">
          {stagesTasks.map((tasks, i) => {
            return (
              <div className="bg-[white] border-4 ml-20 mt-0" key={`${i}`}>
                <div className="">
                  <h4 className="text-lg font-bold">{this.stagesNames[i]}</h4>
                  <ul className="bg-[#393933] border-2" data-testid={`stage-${i}`}>
                    {tasks.map((task, index) => {
                      return (
                        <li className="slide-up-fade-in" key={`${i}${index}`}>
                          <div className="justify-center items-center">
                            <span data-testid={`${task.name.split(' ').join('-')}-name`}>
                              {task.name}
                            </span>
                            <div className="icons">
                              <button
                                disabled={task.stage === 0}
                                onClick={() => this.moveToBack(task)}
                                className="bg-[red] p-2 rounded-lg ml-3"
                                data-testid={`${task.name.split(' ').join('-')}-back`}
                              >
                               -
                              </button>
                              <button
                                disabled={task.stage === this.stagesNames.length - 1}
                                onClick={() => this.moveToForward(task)}
                                className="bg-[blue] p-2 rounded-lg ml-3"
                                data-testid={`${task.name.split(' ').join('-')}-forward`}
                              >
                               +
                              </button>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}