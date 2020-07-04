require 'rails_helper'
describe Group do
  describe '#create' do

    it "is invalid without a nickname" do
      group = build(:group, name: nil)
      group.valid?
      expect(group.errors[:name]).to include("を入力してください")
    end

  end
end