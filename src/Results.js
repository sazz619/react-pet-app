import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {pets.map((pet) => {
        return (
          // eslint-disable-next-line react/jsx-key

          <Pet
            animal={pet.animal}
            key={pet.id}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        );
      })}
    </div>
  );
};

export default Results;
