import React from 'react';
import { Command } from '../../../types/common';

interface Props {
  commands: Command[];
}

const ListCommands = ({ commands }: Props) => (
  <ul className="flex flex-col gap-2" role="list">
    {commands.map((command) => (
      <li
        key={command.id}
        className="flex gap-4 rounded bg-slate-500 p-2"
        role="listitem"
      >
        {command.command} - {command.description}
      </li>
    ))}
  </ul>
);

export default ListCommands;
