import { getWindowManager } from '../../lib/window-manager';
import { openFile, openKeepassFile, newFile } from '../../lib/files';

const windowManager = getWindowManager();

module.exports = [
  {
    label: 'New Archive',
    accelerator: 'CmdOrCtrl+N',
    click: (item, focusedWindow) => newFile(focusedWindow)
  },
  {
    label: 'Open Archive',
    accelerator: 'CmdOrCtrl+O',
    click: (item, focusedWindow) => openFile(focusedWindow)
  },
  {
    type: 'separator'
  },
  {
    label: 'Import',
    submenu: [
      {
        label: 'From KeePass archive',
        click: (item, focusedWindow) => openKeepassFile(focusedWindow)
      }
    ]
  },
  {
    type: 'separator'
  },
  {
    label: 'Open New Window',
    accelerator: 'CmdOrCtrl+Shift+N',
    click: () => {
      windowManager.buildWindowOfType('main');
    }
  },
  {
    type: 'separator'
  },
  {
    label: 'Close Window',
    accelerator: 'CmdOrCtrl+W',
    role: 'close'
  }
];
