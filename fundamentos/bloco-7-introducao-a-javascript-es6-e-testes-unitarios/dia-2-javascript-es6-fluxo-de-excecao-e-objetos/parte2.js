//PARTE II

    //Parte 1

    const order = {
      name: 'Rafael Andrade',
      phoneNumber: '11-98763-1416',
      address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
      },
      order: {
        pizza: {
          marguerita: {
            amount: 1,
            price: 25,
          },
          pepperoni: {
            amount: 1,
            price: 20,
          }
        },
        drinks: {
          coke: {
            type: 'Coca-Cola Zero',
            price: 10,
            amount: 1,
          }
        },
        delivery: {
          deliveryPerson: 'Ana Silveira',
          price: 5,
        }
      },
      payment: {
        total: 60,
      },
    };

    const customerInfo = (order) => {
      // "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
      return `Olá ${order.order.delivery.deliveryPerson}, entrega para:${order.name}, Telefone:${order.phoneNumber}, R.${order.address.street}, Nº:${order.address.number}, AP:${order.address.apartment}`;

    }

    console.log(customerInfo(order));

    const orderModifier = (order) => {
      const novoCliente = Object.assign({}, order);
      novoCliente.name = 'Luiz Silva';
      novoCliente.payment.total = 50;
      return `Olá ${novoCliente.name}, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é de R$${novoCliente.payment.total},00`
    }

    console.log(orderModifier(order));