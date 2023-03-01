class MessagesController < ApplicationController
  def index
    def index
      @message = Message.find(rand(1..Message.count))
      render json: @message, status: 200
    end
  end
end
