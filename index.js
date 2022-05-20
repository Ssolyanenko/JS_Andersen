
const isValidBrandName = (arg) => {
  return typeof arg !== "string" || arg.length < 1 || arg.length > 50;
};

class Car {
  #maxSpeed;
  #yearOfManufacturing;
  #brand;
  #model;
  #maxFuelVolume;
  #fuelConsumption;
  #isStarted;
  #mileage;
  #currentFuelVolume;

    constructor(isStarted, mileage, currentFuelVolume) {
    this.#isStarted = isStarted;
    this.#mileage = 0;
    this.#currentFuelVolume = 0;
  }

  get brand() {
    return this.#brand;
  }

  set brand(value) {
    if (isValidBrandName(value)) {
      throw new Error("Ошибка!");
    } else {
      return (this.#brand = value);
    }
  }

  get model() {
    return this.#model;
  }

  set model(value) {
    if (isValidBrandName(value)) {
      throw new Error("Ошибка!");
    } else {
      return (this.#model = value);
    }
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set yearOfManufacturing(value) {
    if (typeof value !== "number" || value < 1900 || value > 2022) {
      throw new Error("Ошибка!");
    } else {
      return (this.#yearOfManufacturing = value);
    }
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxSpeed(value) {
    if (typeof value !== "number" || value < 100 || value > 300) {
      throw new Error("Ошибка!");
    } else {
      return (this.#maxSpeed = value);
    }
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set maxFuelVolume(value) {
    if (typeof value !== "number" || value < 5 || value > 40) {
      throw new Error("Ошибка!");
    } else {
      return (this.#maxFuelVolume = value);
    }
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  set fuelConsumption(value) {
    if (typeof value !== "number" || value <= 0) {
      throw new Error("Ошибка!");
    } else {
      return (this.#fuelConsumption = value);
    }
  }

  start() {
    if (this.#isStarted) {
      throw new Error("'Машина уже заведена'");
    } else {
      this.#isStarted = true;
    }
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error("Машина еще не заведена");
    } else {
      this.#isStarted = false;
    }
  }

  fillUpGasTank(value) {
    if (isNaN(value) || value <= 0) {
      throw new Error("Неверное количество топлива для заправки");
    } else if (value > 40) {
      throw new Error("Топливный бак переполнен");
    } else {
      this.#currentFuelVolume += value;
    }
  }

  drive(speed, hours) {
    const distance = speed * hours;
    const howMuchFuel = (+distance / 100) * this.#fuelConsumption;

    if (isNaN(speed) || speed <= 0) {
      throw new Error("Неверная скорость");
    } else if (speed > 300) {
      throw new Error("Машина не может ехать так быстро");
    } else if (isNaN(hours) || hours <= 0) {
      throw new Error("Неверное количество часов");
    } else if (!this.#isStarted) {
      throw new Error("Машина должна быть заведена, чтобы ехать");
    } else if (this.#currentFuelVolume <= 0) {
      throw new Error("Недостаточно топлива");
    } else if (howMuchFuel > this.#currentFuelVolume) {
      throw new Error("Недостаточно топлива");
    }

    this.#mileage += +distance;
    this.#currentFuelVolume -= howMuchFuel;
  }
}

