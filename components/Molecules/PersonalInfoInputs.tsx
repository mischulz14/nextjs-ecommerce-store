import Image from 'next/image';

const PersonalInfoInputs = (props: any) => {
  return (
    <div className="flex flex-col items-center checkout__form__person-info">
      <div className="checkout__image-wrapper">
        <Image src="/images/person.svg" width="50" height="50" />
      </div>
      <span className="mb-10 text-center text-black uppercase dark:text-white">
        Personal Info
      </span>
      <div className="relative input-wrapper">
        <input
          id="first-name"
          value={props.firstName}
          onChange={(event) => props.setFirstName(event.target.value)}
          data-test-id="checkout-first-name"
        />
        <label htmlFor="first-name">First Name</label>
      </div>
      <div className="relative input-wrapper">
        <input
          id="last-name"
          value={props.lastName}
          onChange={(event) => props.setLastName(event.target.value)}
          data-test-id="checkout-last-name"
        />
        <label htmlFor="last-name">Last Name</label>
      </div>
      <div className="relative input-wrapper">
        <input
          id="email"
          value={props.email}
          onChange={(event) => props.setEmail(event.target.value)}
          type="email"
          data-test-id="checkout-email"
          placeholder="name@provider.com"
        />
        <label htmlFor="email">Email</label>
      </div>
    </div>
  );
};

export default PersonalInfoInputs;
