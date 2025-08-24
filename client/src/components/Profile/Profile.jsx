import { useState, useEffect } from "react";
import { Save, User, Mail, Phone, MapPin, Building2, Upload } from "lucide-react";

export default function Profile() {
  const [profile, setProfile] = useState({
    companyName: "",
    yourName: "",
    email: "",
    phone: "",
    address: "",
    gstNumber: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    companyLogo: null,
    
  });

  // Load saved profile from localStorage
  useEffect(() => {
    const savedProfile = localStorage.getItem("invoiceProfile");
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageUpload = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, [field]: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem("invoiceProfile", JSON.stringify(profile));
    alert("Profile saved successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>

      <div className="bg-white p-6 rounded-2xl shadow-lg space-y-6">
        {/* Logo + Profile Image */}
        <div className="flex gap-8">
          {/* Company Logo */}
          <div className="flex flex-col items-center">
            <label className="block text-sm font-medium mb-2">Company Logo</label>
            <div className="w-24 h-24 border rounded-full flex items-center justify-center overflow-hidden bg-gray-100">
              {profile.companyLogo ? (
                <img src={profile.companyLogo} alt="Company Logo" className="w-full h-full object-cover" />
              ) : (
                <Building2 className="w-10 h-10 text-gray-400" />
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, "companyLogo")}
              className="mt-2 text-sm"
            />
          </div>

        </div>

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={profile.companyName}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* Your Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              name="yourName"
              value={profile.yourName}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Address</label>
            <textarea
              name="address"
              value={profile.address}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* GST */}
          <div>
            <label className="block text-sm font-medium mb-1">GST Number</label>
            <input
              type="text"
              name="gstNumber"
              value={profile.gstNumber}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* Bank */}
          <div>
            <label className="block text-sm font-medium mb-1">Bank Name</label>
            <input
              type="text"
              name="bankName"
              value={profile.bankName}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* Account */}
          <div>
            <label className="block text-sm font-medium mb-1">Account Number</label>
            <input
              type="text"
              name="accountNumber"
              value={profile.accountNumber}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* IFSC */}
          <div>
            <label className="block text-sm font-medium mb-1">IFSC Code</label>
            <input
              type="text"
              name="ifscCode"
              value={profile.ifscCode}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end mt-6">
        <button
          onClick={handleSave}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center"
        >
          <Save className="mr-2 w-4 h-4" /> Save Changes
        </button>
      </div>
    </div>
  );
}
