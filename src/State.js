export default function State(name, time=0) {
    this.name = name;
    this.time = time;
    this.nextStates = [];
  
    this.getNextStateNames = () => {
      const names = [];
      this.nextStates.forEach(s => {
        names.push(s.name);
      })
      return names;
    };
  
    this.addNextState = (state) => {
      this.nextStates.push(state);
    };
  
    this.toString = () => {
      return `${this.name}={${this.time},${this.getNextStateNames()}}`;
    }
  }