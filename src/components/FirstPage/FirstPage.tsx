import React, { useState } from 'react';

const FirstPage: React.FC<{formData: any, setFormData: any, nextPage: () => void}> = ({formData, setFormData, nextPage}) => {
  const [errors, setErrors] = useState<any>({});

  const validatePage = () => {
    const { firstName, lastName, birthDate, birthCountry, birthCity, currentCountry, currentCity, gender } = formData;
    const newErrors: any = {};

    if (!firstName.trim()) {
      newErrors.firstName = "Please enter your name";
    }

    if (!lastName.trim()) {
      newErrors.lastName = "Please enter your surname";
    }

    if (!birthDate.trim()) {
      newErrors.birthDate = "Please enter your birthday";
    }

    if (!birthCountry.trim()) {
      newErrors.birthCountry = "Please enter the country of the birth";
    }

    if (!birthCity.trim()) {
      newErrors.birthCity = "Please enter the city of birth";
    }

    if (!currentCountry.trim()) {
      newErrors.currentCountry = "Please enter your country";
    }

    if (!currentCity.trim()) {
      newErrors.currentCity = "Please nter your city";
    }

    if (!gender.trim()) {
      newErrors.gender = "Please select your gender";
    }

    setErrors(newErrors);

    // move to next page
    if (Object.keys(newErrors).length === 0) {
      nextPage();
    }
  };

  return (
    <div>
      <h2>Adım 1: Kişisel Bilgiler</h2>
      <div>
        <label htmlFor="firstName">Adınız:</label>
        <input type="text" id="firstName" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
        {errors.firstName && <p>{errors.firstName}</p>}
      </div>
      <div>
        <label htmlFor="lastName">Soyadınız:</label>
        <input type="text" id="lastName" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
        {errors.lastName && <p>{errors.lastName}</p>}
      </div>
      <div>
        <label htmlFor="birthDate">Doğum Tarihi:</label>
        <input type="date" id="birthDate" value={formData.birthDate} onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })} />
        {errors.birthDate && <p>{errors.birthDate}</p>}
      </div>
      <div>
        <label htmlFor="birthCountry">Doğum Yeri Ülke:</label>
        <input type="text" id="birthCountry" value={formData.birthCountry} onChange={(e) => setFormData({ ...formData, birthCountry: e.target.value })} />
        {errors.birthCountry && <p>{errors.birthCountry}</p>}
      </div>
      <div>
        <label htmlFor="birthCity">Doğum Yeri Şehir:</label>
        <input type="text" id="birthCity" value={formData.birthCity} onChange={(e) => setFormData({ ...formData, birthCity: e.target.value })} />
        {errors.birthCity && <p>{errors.birthCity}</p>}
      </div>
      <div>
        <label htmlFor="currentCountry">Mevcut Bulunduğunuz Ülke:</label>
        <input type="text" id="currentCountry" value={formData.currentCountry} onChange={(e) => setFormData({ ...formData, currentCountry: e.target.value })} />
        {errors.currentCountry && <p>{errors.currentCountry}</p>}
      </div>
      <div>
        <label htmlFor="currentCity">Mevcut Bulunduğunuz Şehir:</label>
        <input type="text" id="currentCity" value={formData.currentCity} onChange={(e) => setFormData({ ...formData, currentCity: e.target.value })} />
        {errors.currentCity && <p>{errors.currentCity}</p>}
      </div>
      <div>
        <label>Cinsiyet:</label>
        <div>
          <label htmlFor="male">Erkek</label>
          <input type="radio" id="male" name="gender" value="male" onChange={(e) => setFormData({ ...formData, gender: e.target.value })} />
        </div>
        <div>
          <label htmlFor="female">Kadın</label>
          <input type="radio" id="female" name="gender" value="female" onChange={(e) => setFormData({ ...formData, gender: e.target.value })} />
        </div>
        {errors.gender && <p>{errors.gender}</p>}
      </div>
      <button onClick={validatePage}>Devam Et</button>
    </div>
  );
};

export default FirstPage;
