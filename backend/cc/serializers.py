from rest_framework import serializers

from .models import Summary



class RegisterationSummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Summary
        fields = ( "location_of_fire", "safe_to_leave", "direction_and_speed","firefighters_activity","number_of_firefighters", "what_is_on_fire", "google_map")

    def create(self, validated_data):
        return Summary.objects.create(**validated_data)
    
