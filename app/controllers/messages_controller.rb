class MessagesController < ApplicationController
  def index
    def index
    @message = Message.all
    render json: @message, status: 200
    end
  end
end
