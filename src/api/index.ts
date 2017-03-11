const storage = window.localStorage;

class Api {

  getItemsList () {
    // I used promises for easy switch out to REST api or sockets in future
    return new Promise<IItem[]>(resolve => {
      const items: IItem[] = JSON.parse(storage.getItem('items')) || [];

      // This timeout used for request time simulation
      setTimeout(() => resolve(items), Math.random() * 1000);
    });
  }

  createItem (name: string, description: string) {
    // I used promises for easy switch out to REST api or sockets in future
    return new Promise(resolve => {
      const items: IItem[] = JSON.parse(storage.getItem('items')) || [];

      items.push({ name, description });

      storage.setItem('items', JSON.stringify(items));

      // This timeout used for request time simulation
      setTimeout(resolve, Math.random() * 1000);
    });
  }
}

export default new Api();
