const RoomInfo = ({ roomData }) => {
  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div
          className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          "
        >
          <div>Hosted by Veluvana{roomData.host.name}</div>

          <img
            className="rounded-full"
            height="30"
            width="30"
            alt="Avatar"
            src={roomData.host.image}
          />
        </div>
        <div
          className="
            flex 
            flex-row 
            items-center 
            gap-4 
            font-light
            text-neutral-500
          "
        >
          <div>{roomData.guests} guests</div>
          <div>{roomData.bedrooms} rooms</div>
          <div>{roomData.bathrooms} bathrooms</div>
        </div>
      </div>

      <hr />
      <div
        className="
      text-lg font-light text-neutral-500"
      >
        Veluvana is a unique bamboo house with a wonderful view of Sidemen
        Valley, a genuine tropical landscape with Mount Agung peak on its back.
        This getaway spot is a great place to bring into reality the dream
        adventure of the true wanderer. We invite you to feel the magnificent
        vibes of the entire house to escape the life that is full of drama into
        a journey with ultimate joy.
      </div>
      <hr />
    </div>
  );
};

export default RoomInfo;
