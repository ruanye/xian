// 默认数据 
const defaultData = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Bob Johnson', age: 35 },
];

saveDataToLocalStorage(defaultData)

function getDataFromLocalStorage() {
    const dataString = localStorage.getItem('users');
    if (dataString) {
      return JSON.parse(dataString);
    } else {
      return [];
    }
  }
  
  // 保存数据到本地存储
  function saveDataToLocalStorage(data) {
    localStorage.setItem('users', JSON.stringify(data));
  }
  
  // 获取所有数据
  Mock.mock('/api/users', 'get', () => {
    const data = getDataFromLocalStorage();
    return data;
  });
  
  // 获取单个数据
  Mock.mock(/\/api\/users\/\d+/, 'get', (options) => {
    const id = parseInt(options.url.split('/').pop());
    const data = getDataFromLocalStorage();
    const user = data.find((item) => item.id === id);
    return user;
  });
  
  // 创建数据
  Mock.mock('/api/users', 'post', (options) => {
    const newUser = JSON.parse(options.body);
    const data = getDataFromLocalStorage();
    const id = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    newUser.id = id;
    data.push(newUser);
    saveDataToLocalStorage(data);
    return newUser;
  });
  
  // 更新数据
  Mock.mock(/\/api\/users\/\d+/, 'put', (options) => {
    const id = parseInt(options.url.split('/').pop());
    const updatedUser = JSON.parse(options.body);
    const data = getDataFromLocalStorage();
    const index = data.findIndex((item) => item.id === id);
    if (index !== -1) {
      data[index] = { ...data[index], ...updatedUser };
      saveDataToLocalStorage(data);
      return data[index];
    }
    return {};
  });
  
  // 删除数据
  Mock.mock(/\/api\/users\/\d+/, 'delete', (options) => {
    const id = parseInt(options.url.split('/').pop());
    const data = getDataFromLocalStorage();
    const index = data.findIndex((item) => item.id === id);
    if (index !== -1) {
      const deletedUser = data[index];
      data.splice(index, 1);
      saveDataToLocalStorage(data);
      return deletedUser;
    }
    return {};
  });